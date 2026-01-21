'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9471<T> = T extends (infer U)[]
  ? DeepReadonlyArray9471<U>
  : T extends object
  ? DeepReadonlyObject9471<T>
  : T;

interface DeepReadonlyArray9471<T> extends ReadonlyArray<DeepReadonly9471<T>> {}

type DeepReadonlyObject9471<T> = {
  readonly [P in keyof T]: DeepReadonly9471<T[P]>;
};

type UnionToIntersection9471<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9471<T> = UnionToIntersection9471<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9471<T extends unknown[], V> = [...T, V];

type TuplifyUnion9471<T, L = LastOf9471<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9471<TuplifyUnion9471<Exclude<T, L>>, L>;

type DeepPartial9471<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9471<T[P]> }
  : T;

type Paths9471<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9471<K, Paths9471<T[K], Prev9471[D]>> : never }[keyof T]
  : never;

type Prev9471 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9471<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9471 {
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

type ConfigPaths9471 = Paths9471<NestedConfig9471>;

interface HeavyProps9471 {
  config: DeepPartial9471<NestedConfig9471>;
  path?: ConfigPaths9471;
}

const HeavyComponent9471 = memo(function HeavyComponent9471({ config }: HeavyProps9471) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9471) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9471 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9471: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9471.displayName = 'HeavyComponent9471';
export default HeavyComponent9471;
