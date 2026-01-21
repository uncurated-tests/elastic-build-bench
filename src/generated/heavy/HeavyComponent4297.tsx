'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4297<T> = T extends (infer U)[]
  ? DeepReadonlyArray4297<U>
  : T extends object
  ? DeepReadonlyObject4297<T>
  : T;

interface DeepReadonlyArray4297<T> extends ReadonlyArray<DeepReadonly4297<T>> {}

type DeepReadonlyObject4297<T> = {
  readonly [P in keyof T]: DeepReadonly4297<T[P]>;
};

type UnionToIntersection4297<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4297<T> = UnionToIntersection4297<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4297<T extends unknown[], V> = [...T, V];

type TuplifyUnion4297<T, L = LastOf4297<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4297<TuplifyUnion4297<Exclude<T, L>>, L>;

type DeepPartial4297<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4297<T[P]> }
  : T;

type Paths4297<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4297<K, Paths4297<T[K], Prev4297[D]>> : never }[keyof T]
  : never;

type Prev4297 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4297<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4297 {
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

type ConfigPaths4297 = Paths4297<NestedConfig4297>;

interface HeavyProps4297 {
  config: DeepPartial4297<NestedConfig4297>;
  path?: ConfigPaths4297;
}

const HeavyComponent4297 = memo(function HeavyComponent4297({ config }: HeavyProps4297) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4297) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4297 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4297: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4297.displayName = 'HeavyComponent4297';
export default HeavyComponent4297;
