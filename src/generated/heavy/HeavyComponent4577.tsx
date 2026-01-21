'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4577<T> = T extends (infer U)[]
  ? DeepReadonlyArray4577<U>
  : T extends object
  ? DeepReadonlyObject4577<T>
  : T;

interface DeepReadonlyArray4577<T> extends ReadonlyArray<DeepReadonly4577<T>> {}

type DeepReadonlyObject4577<T> = {
  readonly [P in keyof T]: DeepReadonly4577<T[P]>;
};

type UnionToIntersection4577<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4577<T> = UnionToIntersection4577<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4577<T extends unknown[], V> = [...T, V];

type TuplifyUnion4577<T, L = LastOf4577<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4577<TuplifyUnion4577<Exclude<T, L>>, L>;

type DeepPartial4577<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4577<T[P]> }
  : T;

type Paths4577<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4577<K, Paths4577<T[K], Prev4577[D]>> : never }[keyof T]
  : never;

type Prev4577 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4577<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4577 {
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

type ConfigPaths4577 = Paths4577<NestedConfig4577>;

interface HeavyProps4577 {
  config: DeepPartial4577<NestedConfig4577>;
  path?: ConfigPaths4577;
}

const HeavyComponent4577 = memo(function HeavyComponent4577({ config }: HeavyProps4577) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4577) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4577 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4577: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4577.displayName = 'HeavyComponent4577';
export default HeavyComponent4577;
