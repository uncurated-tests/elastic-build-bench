'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13084<T> = T extends (infer U)[]
  ? DeepReadonlyArray13084<U>
  : T extends object
  ? DeepReadonlyObject13084<T>
  : T;

interface DeepReadonlyArray13084<T> extends ReadonlyArray<DeepReadonly13084<T>> {}

type DeepReadonlyObject13084<T> = {
  readonly [P in keyof T]: DeepReadonly13084<T[P]>;
};

type UnionToIntersection13084<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13084<T> = UnionToIntersection13084<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13084<T extends unknown[], V> = [...T, V];

type TuplifyUnion13084<T, L = LastOf13084<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13084<TuplifyUnion13084<Exclude<T, L>>, L>;

type DeepPartial13084<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13084<T[P]> }
  : T;

type Paths13084<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13084<K, Paths13084<T[K], Prev13084[D]>> : never }[keyof T]
  : never;

type Prev13084 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13084<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13084 {
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

type ConfigPaths13084 = Paths13084<NestedConfig13084>;

interface HeavyProps13084 {
  config: DeepPartial13084<NestedConfig13084>;
  path?: ConfigPaths13084;
}

const HeavyComponent13084 = memo(function HeavyComponent13084({ config }: HeavyProps13084) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13084) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13084 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13084: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13084.displayName = 'HeavyComponent13084';
export default HeavyComponent13084;
