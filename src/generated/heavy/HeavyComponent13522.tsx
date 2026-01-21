'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13522<T> = T extends (infer U)[]
  ? DeepReadonlyArray13522<U>
  : T extends object
  ? DeepReadonlyObject13522<T>
  : T;

interface DeepReadonlyArray13522<T> extends ReadonlyArray<DeepReadonly13522<T>> {}

type DeepReadonlyObject13522<T> = {
  readonly [P in keyof T]: DeepReadonly13522<T[P]>;
};

type UnionToIntersection13522<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13522<T> = UnionToIntersection13522<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13522<T extends unknown[], V> = [...T, V];

type TuplifyUnion13522<T, L = LastOf13522<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13522<TuplifyUnion13522<Exclude<T, L>>, L>;

type DeepPartial13522<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13522<T[P]> }
  : T;

type Paths13522<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13522<K, Paths13522<T[K], Prev13522[D]>> : never }[keyof T]
  : never;

type Prev13522 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13522<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13522 {
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

type ConfigPaths13522 = Paths13522<NestedConfig13522>;

interface HeavyProps13522 {
  config: DeepPartial13522<NestedConfig13522>;
  path?: ConfigPaths13522;
}

const HeavyComponent13522 = memo(function HeavyComponent13522({ config }: HeavyProps13522) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13522) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13522 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13522: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13522.displayName = 'HeavyComponent13522';
export default HeavyComponent13522;
