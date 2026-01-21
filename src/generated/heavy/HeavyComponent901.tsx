'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly901<T> = T extends (infer U)[]
  ? DeepReadonlyArray901<U>
  : T extends object
  ? DeepReadonlyObject901<T>
  : T;

interface DeepReadonlyArray901<T> extends ReadonlyArray<DeepReadonly901<T>> {}

type DeepReadonlyObject901<T> = {
  readonly [P in keyof T]: DeepReadonly901<T[P]>;
};

type UnionToIntersection901<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf901<T> = UnionToIntersection901<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push901<T extends unknown[], V> = [...T, V];

type TuplifyUnion901<T, L = LastOf901<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push901<TuplifyUnion901<Exclude<T, L>>, L>;

type DeepPartial901<T> = T extends object
  ? { [P in keyof T]?: DeepPartial901<T[P]> }
  : T;

type Paths901<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join901<K, Paths901<T[K], Prev901[D]>> : never }[keyof T]
  : never;

type Prev901 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join901<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig901 {
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

type ConfigPaths901 = Paths901<NestedConfig901>;

interface HeavyProps901 {
  config: DeepPartial901<NestedConfig901>;
  path?: ConfigPaths901;
}

const HeavyComponent901 = memo(function HeavyComponent901({ config }: HeavyProps901) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 901) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-901 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H901: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent901.displayName = 'HeavyComponent901';
export default HeavyComponent901;
