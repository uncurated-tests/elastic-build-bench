'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9506<T> = T extends (infer U)[]
  ? DeepReadonlyArray9506<U>
  : T extends object
  ? DeepReadonlyObject9506<T>
  : T;

interface DeepReadonlyArray9506<T> extends ReadonlyArray<DeepReadonly9506<T>> {}

type DeepReadonlyObject9506<T> = {
  readonly [P in keyof T]: DeepReadonly9506<T[P]>;
};

type UnionToIntersection9506<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9506<T> = UnionToIntersection9506<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9506<T extends unknown[], V> = [...T, V];

type TuplifyUnion9506<T, L = LastOf9506<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9506<TuplifyUnion9506<Exclude<T, L>>, L>;

type DeepPartial9506<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9506<T[P]> }
  : T;

type Paths9506<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9506<K, Paths9506<T[K], Prev9506[D]>> : never }[keyof T]
  : never;

type Prev9506 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9506<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9506 {
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

type ConfigPaths9506 = Paths9506<NestedConfig9506>;

interface HeavyProps9506 {
  config: DeepPartial9506<NestedConfig9506>;
  path?: ConfigPaths9506;
}

const HeavyComponent9506 = memo(function HeavyComponent9506({ config }: HeavyProps9506) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9506) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9506 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9506: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9506.displayName = 'HeavyComponent9506';
export default HeavyComponent9506;
