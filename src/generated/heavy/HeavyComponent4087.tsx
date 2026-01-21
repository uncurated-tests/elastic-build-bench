'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4087<T> = T extends (infer U)[]
  ? DeepReadonlyArray4087<U>
  : T extends object
  ? DeepReadonlyObject4087<T>
  : T;

interface DeepReadonlyArray4087<T> extends ReadonlyArray<DeepReadonly4087<T>> {}

type DeepReadonlyObject4087<T> = {
  readonly [P in keyof T]: DeepReadonly4087<T[P]>;
};

type UnionToIntersection4087<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4087<T> = UnionToIntersection4087<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4087<T extends unknown[], V> = [...T, V];

type TuplifyUnion4087<T, L = LastOf4087<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4087<TuplifyUnion4087<Exclude<T, L>>, L>;

type DeepPartial4087<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4087<T[P]> }
  : T;

type Paths4087<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4087<K, Paths4087<T[K], Prev4087[D]>> : never }[keyof T]
  : never;

type Prev4087 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4087<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4087 {
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

type ConfigPaths4087 = Paths4087<NestedConfig4087>;

interface HeavyProps4087 {
  config: DeepPartial4087<NestedConfig4087>;
  path?: ConfigPaths4087;
}

const HeavyComponent4087 = memo(function HeavyComponent4087({ config }: HeavyProps4087) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4087) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4087 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4087: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4087.displayName = 'HeavyComponent4087';
export default HeavyComponent4087;
