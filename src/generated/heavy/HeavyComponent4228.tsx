'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4228<T> = T extends (infer U)[]
  ? DeepReadonlyArray4228<U>
  : T extends object
  ? DeepReadonlyObject4228<T>
  : T;

interface DeepReadonlyArray4228<T> extends ReadonlyArray<DeepReadonly4228<T>> {}

type DeepReadonlyObject4228<T> = {
  readonly [P in keyof T]: DeepReadonly4228<T[P]>;
};

type UnionToIntersection4228<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4228<T> = UnionToIntersection4228<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4228<T extends unknown[], V> = [...T, V];

type TuplifyUnion4228<T, L = LastOf4228<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4228<TuplifyUnion4228<Exclude<T, L>>, L>;

type DeepPartial4228<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4228<T[P]> }
  : T;

type Paths4228<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4228<K, Paths4228<T[K], Prev4228[D]>> : never }[keyof T]
  : never;

type Prev4228 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4228<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4228 {
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

type ConfigPaths4228 = Paths4228<NestedConfig4228>;

interface HeavyProps4228 {
  config: DeepPartial4228<NestedConfig4228>;
  path?: ConfigPaths4228;
}

const HeavyComponent4228 = memo(function HeavyComponent4228({ config }: HeavyProps4228) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4228) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4228 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4228: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4228.displayName = 'HeavyComponent4228';
export default HeavyComponent4228;
