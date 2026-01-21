'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8976<T> = T extends (infer U)[]
  ? DeepReadonlyArray8976<U>
  : T extends object
  ? DeepReadonlyObject8976<T>
  : T;

interface DeepReadonlyArray8976<T> extends ReadonlyArray<DeepReadonly8976<T>> {}

type DeepReadonlyObject8976<T> = {
  readonly [P in keyof T]: DeepReadonly8976<T[P]>;
};

type UnionToIntersection8976<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8976<T> = UnionToIntersection8976<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8976<T extends unknown[], V> = [...T, V];

type TuplifyUnion8976<T, L = LastOf8976<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8976<TuplifyUnion8976<Exclude<T, L>>, L>;

type DeepPartial8976<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8976<T[P]> }
  : T;

type Paths8976<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8976<K, Paths8976<T[K], Prev8976[D]>> : never }[keyof T]
  : never;

type Prev8976 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8976<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8976 {
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

type ConfigPaths8976 = Paths8976<NestedConfig8976>;

interface HeavyProps8976 {
  config: DeepPartial8976<NestedConfig8976>;
  path?: ConfigPaths8976;
}

const HeavyComponent8976 = memo(function HeavyComponent8976({ config }: HeavyProps8976) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8976) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8976 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8976: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8976.displayName = 'HeavyComponent8976';
export default HeavyComponent8976;
