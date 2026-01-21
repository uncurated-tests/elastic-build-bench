'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9036<T> = T extends (infer U)[]
  ? DeepReadonlyArray9036<U>
  : T extends object
  ? DeepReadonlyObject9036<T>
  : T;

interface DeepReadonlyArray9036<T> extends ReadonlyArray<DeepReadonly9036<T>> {}

type DeepReadonlyObject9036<T> = {
  readonly [P in keyof T]: DeepReadonly9036<T[P]>;
};

type UnionToIntersection9036<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9036<T> = UnionToIntersection9036<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9036<T extends unknown[], V> = [...T, V];

type TuplifyUnion9036<T, L = LastOf9036<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9036<TuplifyUnion9036<Exclude<T, L>>, L>;

type DeepPartial9036<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9036<T[P]> }
  : T;

type Paths9036<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9036<K, Paths9036<T[K], Prev9036[D]>> : never }[keyof T]
  : never;

type Prev9036 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9036<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9036 {
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

type ConfigPaths9036 = Paths9036<NestedConfig9036>;

interface HeavyProps9036 {
  config: DeepPartial9036<NestedConfig9036>;
  path?: ConfigPaths9036;
}

const HeavyComponent9036 = memo(function HeavyComponent9036({ config }: HeavyProps9036) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9036) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9036 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9036: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9036.displayName = 'HeavyComponent9036';
export default HeavyComponent9036;
