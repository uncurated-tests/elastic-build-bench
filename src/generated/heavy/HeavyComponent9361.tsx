'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9361<T> = T extends (infer U)[]
  ? DeepReadonlyArray9361<U>
  : T extends object
  ? DeepReadonlyObject9361<T>
  : T;

interface DeepReadonlyArray9361<T> extends ReadonlyArray<DeepReadonly9361<T>> {}

type DeepReadonlyObject9361<T> = {
  readonly [P in keyof T]: DeepReadonly9361<T[P]>;
};

type UnionToIntersection9361<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9361<T> = UnionToIntersection9361<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9361<T extends unknown[], V> = [...T, V];

type TuplifyUnion9361<T, L = LastOf9361<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9361<TuplifyUnion9361<Exclude<T, L>>, L>;

type DeepPartial9361<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9361<T[P]> }
  : T;

type Paths9361<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9361<K, Paths9361<T[K], Prev9361[D]>> : never }[keyof T]
  : never;

type Prev9361 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9361<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9361 {
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

type ConfigPaths9361 = Paths9361<NestedConfig9361>;

interface HeavyProps9361 {
  config: DeepPartial9361<NestedConfig9361>;
  path?: ConfigPaths9361;
}

const HeavyComponent9361 = memo(function HeavyComponent9361({ config }: HeavyProps9361) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9361) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9361 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9361: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9361.displayName = 'HeavyComponent9361';
export default HeavyComponent9361;
