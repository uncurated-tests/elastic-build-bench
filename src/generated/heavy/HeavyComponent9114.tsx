'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9114<T> = T extends (infer U)[]
  ? DeepReadonlyArray9114<U>
  : T extends object
  ? DeepReadonlyObject9114<T>
  : T;

interface DeepReadonlyArray9114<T> extends ReadonlyArray<DeepReadonly9114<T>> {}

type DeepReadonlyObject9114<T> = {
  readonly [P in keyof T]: DeepReadonly9114<T[P]>;
};

type UnionToIntersection9114<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9114<T> = UnionToIntersection9114<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9114<T extends unknown[], V> = [...T, V];

type TuplifyUnion9114<T, L = LastOf9114<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9114<TuplifyUnion9114<Exclude<T, L>>, L>;

type DeepPartial9114<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9114<T[P]> }
  : T;

type Paths9114<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9114<K, Paths9114<T[K], Prev9114[D]>> : never }[keyof T]
  : never;

type Prev9114 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9114<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9114 {
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

type ConfigPaths9114 = Paths9114<NestedConfig9114>;

interface HeavyProps9114 {
  config: DeepPartial9114<NestedConfig9114>;
  path?: ConfigPaths9114;
}

const HeavyComponent9114 = memo(function HeavyComponent9114({ config }: HeavyProps9114) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9114) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9114 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9114: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9114.displayName = 'HeavyComponent9114';
export default HeavyComponent9114;
