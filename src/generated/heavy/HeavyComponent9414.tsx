'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9414<T> = T extends (infer U)[]
  ? DeepReadonlyArray9414<U>
  : T extends object
  ? DeepReadonlyObject9414<T>
  : T;

interface DeepReadonlyArray9414<T> extends ReadonlyArray<DeepReadonly9414<T>> {}

type DeepReadonlyObject9414<T> = {
  readonly [P in keyof T]: DeepReadonly9414<T[P]>;
};

type UnionToIntersection9414<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9414<T> = UnionToIntersection9414<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9414<T extends unknown[], V> = [...T, V];

type TuplifyUnion9414<T, L = LastOf9414<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9414<TuplifyUnion9414<Exclude<T, L>>, L>;

type DeepPartial9414<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9414<T[P]> }
  : T;

type Paths9414<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9414<K, Paths9414<T[K], Prev9414[D]>> : never }[keyof T]
  : never;

type Prev9414 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9414<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9414 {
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

type ConfigPaths9414 = Paths9414<NestedConfig9414>;

interface HeavyProps9414 {
  config: DeepPartial9414<NestedConfig9414>;
  path?: ConfigPaths9414;
}

const HeavyComponent9414 = memo(function HeavyComponent9414({ config }: HeavyProps9414) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9414) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9414 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9414: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9414.displayName = 'HeavyComponent9414';
export default HeavyComponent9414;
