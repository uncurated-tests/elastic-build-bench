'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly857<T> = T extends (infer U)[]
  ? DeepReadonlyArray857<U>
  : T extends object
  ? DeepReadonlyObject857<T>
  : T;

interface DeepReadonlyArray857<T> extends ReadonlyArray<DeepReadonly857<T>> {}

type DeepReadonlyObject857<T> = {
  readonly [P in keyof T]: DeepReadonly857<T[P]>;
};

type UnionToIntersection857<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf857<T> = UnionToIntersection857<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push857<T extends unknown[], V> = [...T, V];

type TuplifyUnion857<T, L = LastOf857<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push857<TuplifyUnion857<Exclude<T, L>>, L>;

type DeepPartial857<T> = T extends object
  ? { [P in keyof T]?: DeepPartial857<T[P]> }
  : T;

type Paths857<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join857<K, Paths857<T[K], Prev857[D]>> : never }[keyof T]
  : never;

type Prev857 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join857<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig857 {
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

type ConfigPaths857 = Paths857<NestedConfig857>;

interface HeavyProps857 {
  config: DeepPartial857<NestedConfig857>;
  path?: ConfigPaths857;
}

const HeavyComponent857 = memo(function HeavyComponent857({ config }: HeavyProps857) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 857) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-857 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H857: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent857.displayName = 'HeavyComponent857';
export default HeavyComponent857;
