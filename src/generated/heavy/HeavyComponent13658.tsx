'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13658<T> = T extends (infer U)[]
  ? DeepReadonlyArray13658<U>
  : T extends object
  ? DeepReadonlyObject13658<T>
  : T;

interface DeepReadonlyArray13658<T> extends ReadonlyArray<DeepReadonly13658<T>> {}

type DeepReadonlyObject13658<T> = {
  readonly [P in keyof T]: DeepReadonly13658<T[P]>;
};

type UnionToIntersection13658<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13658<T> = UnionToIntersection13658<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13658<T extends unknown[], V> = [...T, V];

type TuplifyUnion13658<T, L = LastOf13658<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13658<TuplifyUnion13658<Exclude<T, L>>, L>;

type DeepPartial13658<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13658<T[P]> }
  : T;

type Paths13658<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13658<K, Paths13658<T[K], Prev13658[D]>> : never }[keyof T]
  : never;

type Prev13658 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13658<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13658 {
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

type ConfigPaths13658 = Paths13658<NestedConfig13658>;

interface HeavyProps13658 {
  config: DeepPartial13658<NestedConfig13658>;
  path?: ConfigPaths13658;
}

const HeavyComponent13658 = memo(function HeavyComponent13658({ config }: HeavyProps13658) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13658) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13658 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13658: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13658.displayName = 'HeavyComponent13658';
export default HeavyComponent13658;
