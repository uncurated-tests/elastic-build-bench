'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9037<T> = T extends (infer U)[]
  ? DeepReadonlyArray9037<U>
  : T extends object
  ? DeepReadonlyObject9037<T>
  : T;

interface DeepReadonlyArray9037<T> extends ReadonlyArray<DeepReadonly9037<T>> {}

type DeepReadonlyObject9037<T> = {
  readonly [P in keyof T]: DeepReadonly9037<T[P]>;
};

type UnionToIntersection9037<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9037<T> = UnionToIntersection9037<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9037<T extends unknown[], V> = [...T, V];

type TuplifyUnion9037<T, L = LastOf9037<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9037<TuplifyUnion9037<Exclude<T, L>>, L>;

type DeepPartial9037<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9037<T[P]> }
  : T;

type Paths9037<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9037<K, Paths9037<T[K], Prev9037[D]>> : never }[keyof T]
  : never;

type Prev9037 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9037<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9037 {
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

type ConfigPaths9037 = Paths9037<NestedConfig9037>;

interface HeavyProps9037 {
  config: DeepPartial9037<NestedConfig9037>;
  path?: ConfigPaths9037;
}

const HeavyComponent9037 = memo(function HeavyComponent9037({ config }: HeavyProps9037) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9037) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9037 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9037: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9037.displayName = 'HeavyComponent9037';
export default HeavyComponent9037;
