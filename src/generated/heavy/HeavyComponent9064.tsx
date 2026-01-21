'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9064<T> = T extends (infer U)[]
  ? DeepReadonlyArray9064<U>
  : T extends object
  ? DeepReadonlyObject9064<T>
  : T;

interface DeepReadonlyArray9064<T> extends ReadonlyArray<DeepReadonly9064<T>> {}

type DeepReadonlyObject9064<T> = {
  readonly [P in keyof T]: DeepReadonly9064<T[P]>;
};

type UnionToIntersection9064<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9064<T> = UnionToIntersection9064<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9064<T extends unknown[], V> = [...T, V];

type TuplifyUnion9064<T, L = LastOf9064<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9064<TuplifyUnion9064<Exclude<T, L>>, L>;

type DeepPartial9064<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9064<T[P]> }
  : T;

type Paths9064<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9064<K, Paths9064<T[K], Prev9064[D]>> : never }[keyof T]
  : never;

type Prev9064 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9064<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9064 {
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

type ConfigPaths9064 = Paths9064<NestedConfig9064>;

interface HeavyProps9064 {
  config: DeepPartial9064<NestedConfig9064>;
  path?: ConfigPaths9064;
}

const HeavyComponent9064 = memo(function HeavyComponent9064({ config }: HeavyProps9064) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9064) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9064 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9064: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9064.displayName = 'HeavyComponent9064';
export default HeavyComponent9064;
