'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly325<T> = T extends (infer U)[]
  ? DeepReadonlyArray325<U>
  : T extends object
  ? DeepReadonlyObject325<T>
  : T;

interface DeepReadonlyArray325<T> extends ReadonlyArray<DeepReadonly325<T>> {}

type DeepReadonlyObject325<T> = {
  readonly [P in keyof T]: DeepReadonly325<T[P]>;
};

type UnionToIntersection325<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf325<T> = UnionToIntersection325<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push325<T extends unknown[], V> = [...T, V];

type TuplifyUnion325<T, L = LastOf325<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push325<TuplifyUnion325<Exclude<T, L>>, L>;

type DeepPartial325<T> = T extends object
  ? { [P in keyof T]?: DeepPartial325<T[P]> }
  : T;

type Paths325<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join325<K, Paths325<T[K], Prev325[D]>> : never }[keyof T]
  : never;

type Prev325 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join325<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig325 {
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

type ConfigPaths325 = Paths325<NestedConfig325>;

interface HeavyProps325 {
  config: DeepPartial325<NestedConfig325>;
  path?: ConfigPaths325;
}

const HeavyComponent325 = memo(function HeavyComponent325({ config }: HeavyProps325) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 325) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-325 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H325: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent325.displayName = 'HeavyComponent325';
export default HeavyComponent325;
