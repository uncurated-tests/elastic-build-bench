'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4896<T> = T extends (infer U)[]
  ? DeepReadonlyArray4896<U>
  : T extends object
  ? DeepReadonlyObject4896<T>
  : T;

interface DeepReadonlyArray4896<T> extends ReadonlyArray<DeepReadonly4896<T>> {}

type DeepReadonlyObject4896<T> = {
  readonly [P in keyof T]: DeepReadonly4896<T[P]>;
};

type UnionToIntersection4896<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4896<T> = UnionToIntersection4896<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4896<T extends unknown[], V> = [...T, V];

type TuplifyUnion4896<T, L = LastOf4896<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4896<TuplifyUnion4896<Exclude<T, L>>, L>;

type DeepPartial4896<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4896<T[P]> }
  : T;

type Paths4896<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4896<K, Paths4896<T[K], Prev4896[D]>> : never }[keyof T]
  : never;

type Prev4896 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4896<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4896 {
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

type ConfigPaths4896 = Paths4896<NestedConfig4896>;

interface HeavyProps4896 {
  config: DeepPartial4896<NestedConfig4896>;
  path?: ConfigPaths4896;
}

const HeavyComponent4896 = memo(function HeavyComponent4896({ config }: HeavyProps4896) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4896) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4896 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4896: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4896.displayName = 'HeavyComponent4896';
export default HeavyComponent4896;
