'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4999<T> = T extends (infer U)[]
  ? DeepReadonlyArray4999<U>
  : T extends object
  ? DeepReadonlyObject4999<T>
  : T;

interface DeepReadonlyArray4999<T> extends ReadonlyArray<DeepReadonly4999<T>> {}

type DeepReadonlyObject4999<T> = {
  readonly [P in keyof T]: DeepReadonly4999<T[P]>;
};

type UnionToIntersection4999<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4999<T> = UnionToIntersection4999<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4999<T extends unknown[], V> = [...T, V];

type TuplifyUnion4999<T, L = LastOf4999<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4999<TuplifyUnion4999<Exclude<T, L>>, L>;

type DeepPartial4999<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4999<T[P]> }
  : T;

type Paths4999<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4999<K, Paths4999<T[K], Prev4999[D]>> : never }[keyof T]
  : never;

type Prev4999 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4999<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4999 {
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

type ConfigPaths4999 = Paths4999<NestedConfig4999>;

interface HeavyProps4999 {
  config: DeepPartial4999<NestedConfig4999>;
  path?: ConfigPaths4999;
}

const HeavyComponent4999 = memo(function HeavyComponent4999({ config }: HeavyProps4999) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4999) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4999 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4999: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4999.displayName = 'HeavyComponent4999';
export default HeavyComponent4999;
