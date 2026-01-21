'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4447<T> = T extends (infer U)[]
  ? DeepReadonlyArray4447<U>
  : T extends object
  ? DeepReadonlyObject4447<T>
  : T;

interface DeepReadonlyArray4447<T> extends ReadonlyArray<DeepReadonly4447<T>> {}

type DeepReadonlyObject4447<T> = {
  readonly [P in keyof T]: DeepReadonly4447<T[P]>;
};

type UnionToIntersection4447<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4447<T> = UnionToIntersection4447<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4447<T extends unknown[], V> = [...T, V];

type TuplifyUnion4447<T, L = LastOf4447<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4447<TuplifyUnion4447<Exclude<T, L>>, L>;

type DeepPartial4447<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4447<T[P]> }
  : T;

type Paths4447<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4447<K, Paths4447<T[K], Prev4447[D]>> : never }[keyof T]
  : never;

type Prev4447 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4447<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4447 {
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

type ConfigPaths4447 = Paths4447<NestedConfig4447>;

interface HeavyProps4447 {
  config: DeepPartial4447<NestedConfig4447>;
  path?: ConfigPaths4447;
}

const HeavyComponent4447 = memo(function HeavyComponent4447({ config }: HeavyProps4447) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4447) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4447 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4447: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4447.displayName = 'HeavyComponent4447';
export default HeavyComponent4447;
