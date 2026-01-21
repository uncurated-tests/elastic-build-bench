'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4443<T> = T extends (infer U)[]
  ? DeepReadonlyArray4443<U>
  : T extends object
  ? DeepReadonlyObject4443<T>
  : T;

interface DeepReadonlyArray4443<T> extends ReadonlyArray<DeepReadonly4443<T>> {}

type DeepReadonlyObject4443<T> = {
  readonly [P in keyof T]: DeepReadonly4443<T[P]>;
};

type UnionToIntersection4443<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4443<T> = UnionToIntersection4443<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4443<T extends unknown[], V> = [...T, V];

type TuplifyUnion4443<T, L = LastOf4443<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4443<TuplifyUnion4443<Exclude<T, L>>, L>;

type DeepPartial4443<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4443<T[P]> }
  : T;

type Paths4443<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4443<K, Paths4443<T[K], Prev4443[D]>> : never }[keyof T]
  : never;

type Prev4443 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4443<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4443 {
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

type ConfigPaths4443 = Paths4443<NestedConfig4443>;

interface HeavyProps4443 {
  config: DeepPartial4443<NestedConfig4443>;
  path?: ConfigPaths4443;
}

const HeavyComponent4443 = memo(function HeavyComponent4443({ config }: HeavyProps4443) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4443) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4443 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4443: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4443.displayName = 'HeavyComponent4443';
export default HeavyComponent4443;
