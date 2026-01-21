'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4361<T> = T extends (infer U)[]
  ? DeepReadonlyArray4361<U>
  : T extends object
  ? DeepReadonlyObject4361<T>
  : T;

interface DeepReadonlyArray4361<T> extends ReadonlyArray<DeepReadonly4361<T>> {}

type DeepReadonlyObject4361<T> = {
  readonly [P in keyof T]: DeepReadonly4361<T[P]>;
};

type UnionToIntersection4361<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4361<T> = UnionToIntersection4361<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4361<T extends unknown[], V> = [...T, V];

type TuplifyUnion4361<T, L = LastOf4361<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4361<TuplifyUnion4361<Exclude<T, L>>, L>;

type DeepPartial4361<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4361<T[P]> }
  : T;

type Paths4361<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4361<K, Paths4361<T[K], Prev4361[D]>> : never }[keyof T]
  : never;

type Prev4361 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4361<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4361 {
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

type ConfigPaths4361 = Paths4361<NestedConfig4361>;

interface HeavyProps4361 {
  config: DeepPartial4361<NestedConfig4361>;
  path?: ConfigPaths4361;
}

const HeavyComponent4361 = memo(function HeavyComponent4361({ config }: HeavyProps4361) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4361) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4361 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4361: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4361.displayName = 'HeavyComponent4361';
export default HeavyComponent4361;
