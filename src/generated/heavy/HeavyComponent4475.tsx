'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4475<T> = T extends (infer U)[]
  ? DeepReadonlyArray4475<U>
  : T extends object
  ? DeepReadonlyObject4475<T>
  : T;

interface DeepReadonlyArray4475<T> extends ReadonlyArray<DeepReadonly4475<T>> {}

type DeepReadonlyObject4475<T> = {
  readonly [P in keyof T]: DeepReadonly4475<T[P]>;
};

type UnionToIntersection4475<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4475<T> = UnionToIntersection4475<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4475<T extends unknown[], V> = [...T, V];

type TuplifyUnion4475<T, L = LastOf4475<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4475<TuplifyUnion4475<Exclude<T, L>>, L>;

type DeepPartial4475<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4475<T[P]> }
  : T;

type Paths4475<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4475<K, Paths4475<T[K], Prev4475[D]>> : never }[keyof T]
  : never;

type Prev4475 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4475<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4475 {
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

type ConfigPaths4475 = Paths4475<NestedConfig4475>;

interface HeavyProps4475 {
  config: DeepPartial4475<NestedConfig4475>;
  path?: ConfigPaths4475;
}

const HeavyComponent4475 = memo(function HeavyComponent4475({ config }: HeavyProps4475) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4475) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4475 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4475: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4475.displayName = 'HeavyComponent4475';
export default HeavyComponent4475;
