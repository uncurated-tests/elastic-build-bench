'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4226<T> = T extends (infer U)[]
  ? DeepReadonlyArray4226<U>
  : T extends object
  ? DeepReadonlyObject4226<T>
  : T;

interface DeepReadonlyArray4226<T> extends ReadonlyArray<DeepReadonly4226<T>> {}

type DeepReadonlyObject4226<T> = {
  readonly [P in keyof T]: DeepReadonly4226<T[P]>;
};

type UnionToIntersection4226<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4226<T> = UnionToIntersection4226<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4226<T extends unknown[], V> = [...T, V];

type TuplifyUnion4226<T, L = LastOf4226<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4226<TuplifyUnion4226<Exclude<T, L>>, L>;

type DeepPartial4226<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4226<T[P]> }
  : T;

type Paths4226<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4226<K, Paths4226<T[K], Prev4226[D]>> : never }[keyof T]
  : never;

type Prev4226 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4226<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4226 {
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

type ConfigPaths4226 = Paths4226<NestedConfig4226>;

interface HeavyProps4226 {
  config: DeepPartial4226<NestedConfig4226>;
  path?: ConfigPaths4226;
}

const HeavyComponent4226 = memo(function HeavyComponent4226({ config }: HeavyProps4226) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4226) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4226 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4226: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4226.displayName = 'HeavyComponent4226';
export default HeavyComponent4226;
