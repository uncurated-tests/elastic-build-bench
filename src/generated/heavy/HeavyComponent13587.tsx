'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13587<T> = T extends (infer U)[]
  ? DeepReadonlyArray13587<U>
  : T extends object
  ? DeepReadonlyObject13587<T>
  : T;

interface DeepReadonlyArray13587<T> extends ReadonlyArray<DeepReadonly13587<T>> {}

type DeepReadonlyObject13587<T> = {
  readonly [P in keyof T]: DeepReadonly13587<T[P]>;
};

type UnionToIntersection13587<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13587<T> = UnionToIntersection13587<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13587<T extends unknown[], V> = [...T, V];

type TuplifyUnion13587<T, L = LastOf13587<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13587<TuplifyUnion13587<Exclude<T, L>>, L>;

type DeepPartial13587<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13587<T[P]> }
  : T;

type Paths13587<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13587<K, Paths13587<T[K], Prev13587[D]>> : never }[keyof T]
  : never;

type Prev13587 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13587<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13587 {
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

type ConfigPaths13587 = Paths13587<NestedConfig13587>;

interface HeavyProps13587 {
  config: DeepPartial13587<NestedConfig13587>;
  path?: ConfigPaths13587;
}

const HeavyComponent13587 = memo(function HeavyComponent13587({ config }: HeavyProps13587) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13587) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13587 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13587: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13587.displayName = 'HeavyComponent13587';
export default HeavyComponent13587;
