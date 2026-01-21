'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly361<T> = T extends (infer U)[]
  ? DeepReadonlyArray361<U>
  : T extends object
  ? DeepReadonlyObject361<T>
  : T;

interface DeepReadonlyArray361<T> extends ReadonlyArray<DeepReadonly361<T>> {}

type DeepReadonlyObject361<T> = {
  readonly [P in keyof T]: DeepReadonly361<T[P]>;
};

type UnionToIntersection361<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf361<T> = UnionToIntersection361<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push361<T extends unknown[], V> = [...T, V];

type TuplifyUnion361<T, L = LastOf361<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push361<TuplifyUnion361<Exclude<T, L>>, L>;

type DeepPartial361<T> = T extends object
  ? { [P in keyof T]?: DeepPartial361<T[P]> }
  : T;

type Paths361<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join361<K, Paths361<T[K], Prev361[D]>> : never }[keyof T]
  : never;

type Prev361 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join361<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig361 {
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

type ConfigPaths361 = Paths361<NestedConfig361>;

interface HeavyProps361 {
  config: DeepPartial361<NestedConfig361>;
  path?: ConfigPaths361;
}

const HeavyComponent361 = memo(function HeavyComponent361({ config }: HeavyProps361) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 361) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-361 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H361: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent361.displayName = 'HeavyComponent361';
export default HeavyComponent361;
