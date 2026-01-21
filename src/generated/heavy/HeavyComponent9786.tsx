'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9786<T> = T extends (infer U)[]
  ? DeepReadonlyArray9786<U>
  : T extends object
  ? DeepReadonlyObject9786<T>
  : T;

interface DeepReadonlyArray9786<T> extends ReadonlyArray<DeepReadonly9786<T>> {}

type DeepReadonlyObject9786<T> = {
  readonly [P in keyof T]: DeepReadonly9786<T[P]>;
};

type UnionToIntersection9786<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9786<T> = UnionToIntersection9786<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9786<T extends unknown[], V> = [...T, V];

type TuplifyUnion9786<T, L = LastOf9786<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9786<TuplifyUnion9786<Exclude<T, L>>, L>;

type DeepPartial9786<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9786<T[P]> }
  : T;

type Paths9786<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9786<K, Paths9786<T[K], Prev9786[D]>> : never }[keyof T]
  : never;

type Prev9786 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9786<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9786 {
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

type ConfigPaths9786 = Paths9786<NestedConfig9786>;

interface HeavyProps9786 {
  config: DeepPartial9786<NestedConfig9786>;
  path?: ConfigPaths9786;
}

const HeavyComponent9786 = memo(function HeavyComponent9786({ config }: HeavyProps9786) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9786) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9786 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9786: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9786.displayName = 'HeavyComponent9786';
export default HeavyComponent9786;
