'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13823<T> = T extends (infer U)[]
  ? DeepReadonlyArray13823<U>
  : T extends object
  ? DeepReadonlyObject13823<T>
  : T;

interface DeepReadonlyArray13823<T> extends ReadonlyArray<DeepReadonly13823<T>> {}

type DeepReadonlyObject13823<T> = {
  readonly [P in keyof T]: DeepReadonly13823<T[P]>;
};

type UnionToIntersection13823<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13823<T> = UnionToIntersection13823<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13823<T extends unknown[], V> = [...T, V];

type TuplifyUnion13823<T, L = LastOf13823<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13823<TuplifyUnion13823<Exclude<T, L>>, L>;

type DeepPartial13823<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13823<T[P]> }
  : T;

type Paths13823<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13823<K, Paths13823<T[K], Prev13823[D]>> : never }[keyof T]
  : never;

type Prev13823 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13823<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13823 {
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

type ConfigPaths13823 = Paths13823<NestedConfig13823>;

interface HeavyProps13823 {
  config: DeepPartial13823<NestedConfig13823>;
  path?: ConfigPaths13823;
}

const HeavyComponent13823 = memo(function HeavyComponent13823({ config }: HeavyProps13823) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13823) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13823 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13823: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13823.displayName = 'HeavyComponent13823';
export default HeavyComponent13823;
