'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11228<T> = T extends (infer U)[]
  ? DeepReadonlyArray11228<U>
  : T extends object
  ? DeepReadonlyObject11228<T>
  : T;

interface DeepReadonlyArray11228<T> extends ReadonlyArray<DeepReadonly11228<T>> {}

type DeepReadonlyObject11228<T> = {
  readonly [P in keyof T]: DeepReadonly11228<T[P]>;
};

type UnionToIntersection11228<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11228<T> = UnionToIntersection11228<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11228<T extends unknown[], V> = [...T, V];

type TuplifyUnion11228<T, L = LastOf11228<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11228<TuplifyUnion11228<Exclude<T, L>>, L>;

type DeepPartial11228<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11228<T[P]> }
  : T;

type Paths11228<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11228<K, Paths11228<T[K], Prev11228[D]>> : never }[keyof T]
  : never;

type Prev11228 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11228<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11228 {
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

type ConfigPaths11228 = Paths11228<NestedConfig11228>;

interface HeavyProps11228 {
  config: DeepPartial11228<NestedConfig11228>;
  path?: ConfigPaths11228;
}

const HeavyComponent11228 = memo(function HeavyComponent11228({ config }: HeavyProps11228) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11228) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11228 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11228: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11228.displayName = 'HeavyComponent11228';
export default HeavyComponent11228;
