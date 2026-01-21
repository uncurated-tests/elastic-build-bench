'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8953<T> = T extends (infer U)[]
  ? DeepReadonlyArray8953<U>
  : T extends object
  ? DeepReadonlyObject8953<T>
  : T;

interface DeepReadonlyArray8953<T> extends ReadonlyArray<DeepReadonly8953<T>> {}

type DeepReadonlyObject8953<T> = {
  readonly [P in keyof T]: DeepReadonly8953<T[P]>;
};

type UnionToIntersection8953<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8953<T> = UnionToIntersection8953<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8953<T extends unknown[], V> = [...T, V];

type TuplifyUnion8953<T, L = LastOf8953<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8953<TuplifyUnion8953<Exclude<T, L>>, L>;

type DeepPartial8953<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8953<T[P]> }
  : T;

type Paths8953<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8953<K, Paths8953<T[K], Prev8953[D]>> : never }[keyof T]
  : never;

type Prev8953 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8953<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8953 {
  level1: {
    level2: {
      level3: {
        value: string;
        count: number;
        enabled: boolean;
        items: Array<{ id: number; name: string }>;
      };
    };
  };
}

type ConfigPaths8953 = Paths8953<NestedConfig8953>;

interface HeavyProps8953 {
  config: DeepPartial8953<NestedConfig8953>;
  path?: ConfigPaths8953;
}

const HeavyComponent8953 = memo(function HeavyComponent8953({ config }: HeavyProps8953) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8953) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8953 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8953: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8953.displayName = 'HeavyComponent8953';
export default HeavyComponent8953;
