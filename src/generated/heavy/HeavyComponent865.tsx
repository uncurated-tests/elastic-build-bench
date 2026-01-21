'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly865<T> = T extends (infer U)[]
  ? DeepReadonlyArray865<U>
  : T extends object
  ? DeepReadonlyObject865<T>
  : T;

interface DeepReadonlyArray865<T> extends ReadonlyArray<DeepReadonly865<T>> {}

type DeepReadonlyObject865<T> = {
  readonly [P in keyof T]: DeepReadonly865<T[P]>;
};

type UnionToIntersection865<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf865<T> = UnionToIntersection865<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push865<T extends unknown[], V> = [...T, V];

type TuplifyUnion865<T, L = LastOf865<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push865<TuplifyUnion865<Exclude<T, L>>, L>;

type DeepPartial865<T> = T extends object
  ? { [P in keyof T]?: DeepPartial865<T[P]> }
  : T;

type Paths865<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join865<K, Paths865<T[K], Prev865[D]>> : never }[keyof T]
  : never;

type Prev865 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join865<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig865 {
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

type ConfigPaths865 = Paths865<NestedConfig865>;

interface HeavyProps865 {
  config: DeepPartial865<NestedConfig865>;
  path?: ConfigPaths865;
}

const HeavyComponent865 = memo(function HeavyComponent865({ config }: HeavyProps865) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 865) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-865 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H865: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent865.displayName = 'HeavyComponent865';
export default HeavyComponent865;
