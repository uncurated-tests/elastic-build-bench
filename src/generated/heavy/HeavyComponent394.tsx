'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly394<T> = T extends (infer U)[]
  ? DeepReadonlyArray394<U>
  : T extends object
  ? DeepReadonlyObject394<T>
  : T;

interface DeepReadonlyArray394<T> extends ReadonlyArray<DeepReadonly394<T>> {}

type DeepReadonlyObject394<T> = {
  readonly [P in keyof T]: DeepReadonly394<T[P]>;
};

type UnionToIntersection394<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf394<T> = UnionToIntersection394<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push394<T extends unknown[], V> = [...T, V];

type TuplifyUnion394<T, L = LastOf394<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push394<TuplifyUnion394<Exclude<T, L>>, L>;

type DeepPartial394<T> = T extends object
  ? { [P in keyof T]?: DeepPartial394<T[P]> }
  : T;

type Paths394<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join394<K, Paths394<T[K], Prev394[D]>> : never }[keyof T]
  : never;

type Prev394 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join394<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig394 {
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

type ConfigPaths394 = Paths394<NestedConfig394>;

interface HeavyProps394 {
  config: DeepPartial394<NestedConfig394>;
  path?: ConfigPaths394;
}

const HeavyComponent394 = memo(function HeavyComponent394({ config }: HeavyProps394) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 394) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-394 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H394: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent394.displayName = 'HeavyComponent394';
export default HeavyComponent394;
