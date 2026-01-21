'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4104<T> = T extends (infer U)[]
  ? DeepReadonlyArray4104<U>
  : T extends object
  ? DeepReadonlyObject4104<T>
  : T;

interface DeepReadonlyArray4104<T> extends ReadonlyArray<DeepReadonly4104<T>> {}

type DeepReadonlyObject4104<T> = {
  readonly [P in keyof T]: DeepReadonly4104<T[P]>;
};

type UnionToIntersection4104<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4104<T> = UnionToIntersection4104<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4104<T extends unknown[], V> = [...T, V];

type TuplifyUnion4104<T, L = LastOf4104<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4104<TuplifyUnion4104<Exclude<T, L>>, L>;

type DeepPartial4104<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4104<T[P]> }
  : T;

type Paths4104<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4104<K, Paths4104<T[K], Prev4104[D]>> : never }[keyof T]
  : never;

type Prev4104 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4104<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4104 {
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

type ConfigPaths4104 = Paths4104<NestedConfig4104>;

interface HeavyProps4104 {
  config: DeepPartial4104<NestedConfig4104>;
  path?: ConfigPaths4104;
}

const HeavyComponent4104 = memo(function HeavyComponent4104({ config }: HeavyProps4104) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4104) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4104 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4104: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4104.displayName = 'HeavyComponent4104';
export default HeavyComponent4104;
