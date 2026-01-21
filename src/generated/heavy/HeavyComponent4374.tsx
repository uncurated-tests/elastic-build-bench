'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4374<T> = T extends (infer U)[]
  ? DeepReadonlyArray4374<U>
  : T extends object
  ? DeepReadonlyObject4374<T>
  : T;

interface DeepReadonlyArray4374<T> extends ReadonlyArray<DeepReadonly4374<T>> {}

type DeepReadonlyObject4374<T> = {
  readonly [P in keyof T]: DeepReadonly4374<T[P]>;
};

type UnionToIntersection4374<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4374<T> = UnionToIntersection4374<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4374<T extends unknown[], V> = [...T, V];

type TuplifyUnion4374<T, L = LastOf4374<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4374<TuplifyUnion4374<Exclude<T, L>>, L>;

type DeepPartial4374<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4374<T[P]> }
  : T;

type Paths4374<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4374<K, Paths4374<T[K], Prev4374[D]>> : never }[keyof T]
  : never;

type Prev4374 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4374<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4374 {
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

type ConfigPaths4374 = Paths4374<NestedConfig4374>;

interface HeavyProps4374 {
  config: DeepPartial4374<NestedConfig4374>;
  path?: ConfigPaths4374;
}

const HeavyComponent4374 = memo(function HeavyComponent4374({ config }: HeavyProps4374) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4374) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4374 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4374: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4374.displayName = 'HeavyComponent4374';
export default HeavyComponent4374;
