'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2010<T> = T extends (infer U)[]
  ? DeepReadonlyArray2010<U>
  : T extends object
  ? DeepReadonlyObject2010<T>
  : T;

interface DeepReadonlyArray2010<T> extends ReadonlyArray<DeepReadonly2010<T>> {}

type DeepReadonlyObject2010<T> = {
  readonly [P in keyof T]: DeepReadonly2010<T[P]>;
};

type UnionToIntersection2010<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2010<T> = UnionToIntersection2010<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2010<T extends unknown[], V> = [...T, V];

type TuplifyUnion2010<T, L = LastOf2010<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2010<TuplifyUnion2010<Exclude<T, L>>, L>;

type DeepPartial2010<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2010<T[P]> }
  : T;

type Paths2010<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2010<K, Paths2010<T[K], Prev2010[D]>> : never }[keyof T]
  : never;

type Prev2010 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2010<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2010 {
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

type ConfigPaths2010 = Paths2010<NestedConfig2010>;

interface HeavyProps2010 {
  config: DeepPartial2010<NestedConfig2010>;
  path?: ConfigPaths2010;
}

const HeavyComponent2010 = memo(function HeavyComponent2010({ config }: HeavyProps2010) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2010) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2010 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2010: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2010.displayName = 'HeavyComponent2010';
export default HeavyComponent2010;
