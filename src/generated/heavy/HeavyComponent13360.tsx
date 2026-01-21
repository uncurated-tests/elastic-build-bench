'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13360<T> = T extends (infer U)[]
  ? DeepReadonlyArray13360<U>
  : T extends object
  ? DeepReadonlyObject13360<T>
  : T;

interface DeepReadonlyArray13360<T> extends ReadonlyArray<DeepReadonly13360<T>> {}

type DeepReadonlyObject13360<T> = {
  readonly [P in keyof T]: DeepReadonly13360<T[P]>;
};

type UnionToIntersection13360<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13360<T> = UnionToIntersection13360<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13360<T extends unknown[], V> = [...T, V];

type TuplifyUnion13360<T, L = LastOf13360<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13360<TuplifyUnion13360<Exclude<T, L>>, L>;

type DeepPartial13360<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13360<T[P]> }
  : T;

type Paths13360<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13360<K, Paths13360<T[K], Prev13360[D]>> : never }[keyof T]
  : never;

type Prev13360 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13360<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13360 {
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

type ConfigPaths13360 = Paths13360<NestedConfig13360>;

interface HeavyProps13360 {
  config: DeepPartial13360<NestedConfig13360>;
  path?: ConfigPaths13360;
}

const HeavyComponent13360 = memo(function HeavyComponent13360({ config }: HeavyProps13360) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13360) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13360 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13360: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13360.displayName = 'HeavyComponent13360';
export default HeavyComponent13360;
