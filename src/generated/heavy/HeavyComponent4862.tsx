'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4862<T> = T extends (infer U)[]
  ? DeepReadonlyArray4862<U>
  : T extends object
  ? DeepReadonlyObject4862<T>
  : T;

interface DeepReadonlyArray4862<T> extends ReadonlyArray<DeepReadonly4862<T>> {}

type DeepReadonlyObject4862<T> = {
  readonly [P in keyof T]: DeepReadonly4862<T[P]>;
};

type UnionToIntersection4862<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4862<T> = UnionToIntersection4862<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4862<T extends unknown[], V> = [...T, V];

type TuplifyUnion4862<T, L = LastOf4862<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4862<TuplifyUnion4862<Exclude<T, L>>, L>;

type DeepPartial4862<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4862<T[P]> }
  : T;

type Paths4862<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4862<K, Paths4862<T[K], Prev4862[D]>> : never }[keyof T]
  : never;

type Prev4862 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4862<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4862 {
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

type ConfigPaths4862 = Paths4862<NestedConfig4862>;

interface HeavyProps4862 {
  config: DeepPartial4862<NestedConfig4862>;
  path?: ConfigPaths4862;
}

const HeavyComponent4862 = memo(function HeavyComponent4862({ config }: HeavyProps4862) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4862) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4862 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4862: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4862.displayName = 'HeavyComponent4862';
export default HeavyComponent4862;
