'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly307<T> = T extends (infer U)[]
  ? DeepReadonlyArray307<U>
  : T extends object
  ? DeepReadonlyObject307<T>
  : T;

interface DeepReadonlyArray307<T> extends ReadonlyArray<DeepReadonly307<T>> {}

type DeepReadonlyObject307<T> = {
  readonly [P in keyof T]: DeepReadonly307<T[P]>;
};

type UnionToIntersection307<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf307<T> = UnionToIntersection307<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push307<T extends unknown[], V> = [...T, V];

type TuplifyUnion307<T, L = LastOf307<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push307<TuplifyUnion307<Exclude<T, L>>, L>;

type DeepPartial307<T> = T extends object
  ? { [P in keyof T]?: DeepPartial307<T[P]> }
  : T;

type Paths307<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join307<K, Paths307<T[K], Prev307[D]>> : never }[keyof T]
  : never;

type Prev307 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join307<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig307 {
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

type ConfigPaths307 = Paths307<NestedConfig307>;

interface HeavyProps307 {
  config: DeepPartial307<NestedConfig307>;
  path?: ConfigPaths307;
}

const HeavyComponent307 = memo(function HeavyComponent307({ config }: HeavyProps307) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 307) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-307 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H307: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent307.displayName = 'HeavyComponent307';
export default HeavyComponent307;
