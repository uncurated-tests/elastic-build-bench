'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9865<T> = T extends (infer U)[]
  ? DeepReadonlyArray9865<U>
  : T extends object
  ? DeepReadonlyObject9865<T>
  : T;

interface DeepReadonlyArray9865<T> extends ReadonlyArray<DeepReadonly9865<T>> {}

type DeepReadonlyObject9865<T> = {
  readonly [P in keyof T]: DeepReadonly9865<T[P]>;
};

type UnionToIntersection9865<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9865<T> = UnionToIntersection9865<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9865<T extends unknown[], V> = [...T, V];

type TuplifyUnion9865<T, L = LastOf9865<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9865<TuplifyUnion9865<Exclude<T, L>>, L>;

type DeepPartial9865<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9865<T[P]> }
  : T;

type Paths9865<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9865<K, Paths9865<T[K], Prev9865[D]>> : never }[keyof T]
  : never;

type Prev9865 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9865<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9865 {
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

type ConfigPaths9865 = Paths9865<NestedConfig9865>;

interface HeavyProps9865 {
  config: DeepPartial9865<NestedConfig9865>;
  path?: ConfigPaths9865;
}

const HeavyComponent9865 = memo(function HeavyComponent9865({ config }: HeavyProps9865) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9865) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9865 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9865: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9865.displayName = 'HeavyComponent9865';
export default HeavyComponent9865;
