'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4457<T> = T extends (infer U)[]
  ? DeepReadonlyArray4457<U>
  : T extends object
  ? DeepReadonlyObject4457<T>
  : T;

interface DeepReadonlyArray4457<T> extends ReadonlyArray<DeepReadonly4457<T>> {}

type DeepReadonlyObject4457<T> = {
  readonly [P in keyof T]: DeepReadonly4457<T[P]>;
};

type UnionToIntersection4457<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4457<T> = UnionToIntersection4457<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4457<T extends unknown[], V> = [...T, V];

type TuplifyUnion4457<T, L = LastOf4457<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4457<TuplifyUnion4457<Exclude<T, L>>, L>;

type DeepPartial4457<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4457<T[P]> }
  : T;

type Paths4457<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4457<K, Paths4457<T[K], Prev4457[D]>> : never }[keyof T]
  : never;

type Prev4457 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4457<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4457 {
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

type ConfigPaths4457 = Paths4457<NestedConfig4457>;

interface HeavyProps4457 {
  config: DeepPartial4457<NestedConfig4457>;
  path?: ConfigPaths4457;
}

const HeavyComponent4457 = memo(function HeavyComponent4457({ config }: HeavyProps4457) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4457) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4457 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4457: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4457.displayName = 'HeavyComponent4457';
export default HeavyComponent4457;
