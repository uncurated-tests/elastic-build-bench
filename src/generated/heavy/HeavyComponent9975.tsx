'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9975<T> = T extends (infer U)[]
  ? DeepReadonlyArray9975<U>
  : T extends object
  ? DeepReadonlyObject9975<T>
  : T;

interface DeepReadonlyArray9975<T> extends ReadonlyArray<DeepReadonly9975<T>> {}

type DeepReadonlyObject9975<T> = {
  readonly [P in keyof T]: DeepReadonly9975<T[P]>;
};

type UnionToIntersection9975<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9975<T> = UnionToIntersection9975<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9975<T extends unknown[], V> = [...T, V];

type TuplifyUnion9975<T, L = LastOf9975<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9975<TuplifyUnion9975<Exclude<T, L>>, L>;

type DeepPartial9975<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9975<T[P]> }
  : T;

type Paths9975<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9975<K, Paths9975<T[K], Prev9975[D]>> : never }[keyof T]
  : never;

type Prev9975 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9975<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9975 {
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

type ConfigPaths9975 = Paths9975<NestedConfig9975>;

interface HeavyProps9975 {
  config: DeepPartial9975<NestedConfig9975>;
  path?: ConfigPaths9975;
}

const HeavyComponent9975 = memo(function HeavyComponent9975({ config }: HeavyProps9975) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9975) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9975 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9975: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9975.displayName = 'HeavyComponent9975';
export default HeavyComponent9975;
