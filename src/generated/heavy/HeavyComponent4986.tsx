'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4986<T> = T extends (infer U)[]
  ? DeepReadonlyArray4986<U>
  : T extends object
  ? DeepReadonlyObject4986<T>
  : T;

interface DeepReadonlyArray4986<T> extends ReadonlyArray<DeepReadonly4986<T>> {}

type DeepReadonlyObject4986<T> = {
  readonly [P in keyof T]: DeepReadonly4986<T[P]>;
};

type UnionToIntersection4986<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4986<T> = UnionToIntersection4986<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4986<T extends unknown[], V> = [...T, V];

type TuplifyUnion4986<T, L = LastOf4986<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4986<TuplifyUnion4986<Exclude<T, L>>, L>;

type DeepPartial4986<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4986<T[P]> }
  : T;

type Paths4986<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4986<K, Paths4986<T[K], Prev4986[D]>> : never }[keyof T]
  : never;

type Prev4986 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4986<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4986 {
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

type ConfigPaths4986 = Paths4986<NestedConfig4986>;

interface HeavyProps4986 {
  config: DeepPartial4986<NestedConfig4986>;
  path?: ConfigPaths4986;
}

const HeavyComponent4986 = memo(function HeavyComponent4986({ config }: HeavyProps4986) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4986) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4986 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4986: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4986.displayName = 'HeavyComponent4986';
export default HeavyComponent4986;
