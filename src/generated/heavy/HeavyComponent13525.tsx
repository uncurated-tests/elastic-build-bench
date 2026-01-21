'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13525<T> = T extends (infer U)[]
  ? DeepReadonlyArray13525<U>
  : T extends object
  ? DeepReadonlyObject13525<T>
  : T;

interface DeepReadonlyArray13525<T> extends ReadonlyArray<DeepReadonly13525<T>> {}

type DeepReadonlyObject13525<T> = {
  readonly [P in keyof T]: DeepReadonly13525<T[P]>;
};

type UnionToIntersection13525<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13525<T> = UnionToIntersection13525<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13525<T extends unknown[], V> = [...T, V];

type TuplifyUnion13525<T, L = LastOf13525<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13525<TuplifyUnion13525<Exclude<T, L>>, L>;

type DeepPartial13525<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13525<T[P]> }
  : T;

type Paths13525<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13525<K, Paths13525<T[K], Prev13525[D]>> : never }[keyof T]
  : never;

type Prev13525 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13525<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13525 {
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

type ConfigPaths13525 = Paths13525<NestedConfig13525>;

interface HeavyProps13525 {
  config: DeepPartial13525<NestedConfig13525>;
  path?: ConfigPaths13525;
}

const HeavyComponent13525 = memo(function HeavyComponent13525({ config }: HeavyProps13525) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13525) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13525 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13525: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13525.displayName = 'HeavyComponent13525';
export default HeavyComponent13525;
