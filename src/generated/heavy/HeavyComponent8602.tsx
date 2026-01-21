'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8602<T> = T extends (infer U)[]
  ? DeepReadonlyArray8602<U>
  : T extends object
  ? DeepReadonlyObject8602<T>
  : T;

interface DeepReadonlyArray8602<T> extends ReadonlyArray<DeepReadonly8602<T>> {}

type DeepReadonlyObject8602<T> = {
  readonly [P in keyof T]: DeepReadonly8602<T[P]>;
};

type UnionToIntersection8602<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8602<T> = UnionToIntersection8602<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8602<T extends unknown[], V> = [...T, V];

type TuplifyUnion8602<T, L = LastOf8602<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8602<TuplifyUnion8602<Exclude<T, L>>, L>;

type DeepPartial8602<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8602<T[P]> }
  : T;

type Paths8602<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8602<K, Paths8602<T[K], Prev8602[D]>> : never }[keyof T]
  : never;

type Prev8602 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8602<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8602 {
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

type ConfigPaths8602 = Paths8602<NestedConfig8602>;

interface HeavyProps8602 {
  config: DeepPartial8602<NestedConfig8602>;
  path?: ConfigPaths8602;
}

const HeavyComponent8602 = memo(function HeavyComponent8602({ config }: HeavyProps8602) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8602) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8602 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8602: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8602.displayName = 'HeavyComponent8602';
export default HeavyComponent8602;
