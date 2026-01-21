'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9652<T> = T extends (infer U)[]
  ? DeepReadonlyArray9652<U>
  : T extends object
  ? DeepReadonlyObject9652<T>
  : T;

interface DeepReadonlyArray9652<T> extends ReadonlyArray<DeepReadonly9652<T>> {}

type DeepReadonlyObject9652<T> = {
  readonly [P in keyof T]: DeepReadonly9652<T[P]>;
};

type UnionToIntersection9652<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9652<T> = UnionToIntersection9652<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9652<T extends unknown[], V> = [...T, V];

type TuplifyUnion9652<T, L = LastOf9652<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9652<TuplifyUnion9652<Exclude<T, L>>, L>;

type DeepPartial9652<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9652<T[P]> }
  : T;

type Paths9652<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9652<K, Paths9652<T[K], Prev9652[D]>> : never }[keyof T]
  : never;

type Prev9652 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9652<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9652 {
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

type ConfigPaths9652 = Paths9652<NestedConfig9652>;

interface HeavyProps9652 {
  config: DeepPartial9652<NestedConfig9652>;
  path?: ConfigPaths9652;
}

const HeavyComponent9652 = memo(function HeavyComponent9652({ config }: HeavyProps9652) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9652) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9652 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9652: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9652.displayName = 'HeavyComponent9652';
export default HeavyComponent9652;
