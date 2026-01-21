'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4906<T> = T extends (infer U)[]
  ? DeepReadonlyArray4906<U>
  : T extends object
  ? DeepReadonlyObject4906<T>
  : T;

interface DeepReadonlyArray4906<T> extends ReadonlyArray<DeepReadonly4906<T>> {}

type DeepReadonlyObject4906<T> = {
  readonly [P in keyof T]: DeepReadonly4906<T[P]>;
};

type UnionToIntersection4906<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4906<T> = UnionToIntersection4906<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4906<T extends unknown[], V> = [...T, V];

type TuplifyUnion4906<T, L = LastOf4906<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4906<TuplifyUnion4906<Exclude<T, L>>, L>;

type DeepPartial4906<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4906<T[P]> }
  : T;

type Paths4906<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4906<K, Paths4906<T[K], Prev4906[D]>> : never }[keyof T]
  : never;

type Prev4906 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4906<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4906 {
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

type ConfigPaths4906 = Paths4906<NestedConfig4906>;

interface HeavyProps4906 {
  config: DeepPartial4906<NestedConfig4906>;
  path?: ConfigPaths4906;
}

const HeavyComponent4906 = memo(function HeavyComponent4906({ config }: HeavyProps4906) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4906) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4906 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4906: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4906.displayName = 'HeavyComponent4906';
export default HeavyComponent4906;
