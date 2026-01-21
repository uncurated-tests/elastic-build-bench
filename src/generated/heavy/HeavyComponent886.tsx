'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly886<T> = T extends (infer U)[]
  ? DeepReadonlyArray886<U>
  : T extends object
  ? DeepReadonlyObject886<T>
  : T;

interface DeepReadonlyArray886<T> extends ReadonlyArray<DeepReadonly886<T>> {}

type DeepReadonlyObject886<T> = {
  readonly [P in keyof T]: DeepReadonly886<T[P]>;
};

type UnionToIntersection886<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf886<T> = UnionToIntersection886<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push886<T extends unknown[], V> = [...T, V];

type TuplifyUnion886<T, L = LastOf886<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push886<TuplifyUnion886<Exclude<T, L>>, L>;

type DeepPartial886<T> = T extends object
  ? { [P in keyof T]?: DeepPartial886<T[P]> }
  : T;

type Paths886<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join886<K, Paths886<T[K], Prev886[D]>> : never }[keyof T]
  : never;

type Prev886 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join886<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig886 {
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

type ConfigPaths886 = Paths886<NestedConfig886>;

interface HeavyProps886 {
  config: DeepPartial886<NestedConfig886>;
  path?: ConfigPaths886;
}

const HeavyComponent886 = memo(function HeavyComponent886({ config }: HeavyProps886) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 886) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-886 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H886: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent886.displayName = 'HeavyComponent886';
export default HeavyComponent886;
