'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11720<T> = T extends (infer U)[]
  ? DeepReadonlyArray11720<U>
  : T extends object
  ? DeepReadonlyObject11720<T>
  : T;

interface DeepReadonlyArray11720<T> extends ReadonlyArray<DeepReadonly11720<T>> {}

type DeepReadonlyObject11720<T> = {
  readonly [P in keyof T]: DeepReadonly11720<T[P]>;
};

type UnionToIntersection11720<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11720<T> = UnionToIntersection11720<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11720<T extends unknown[], V> = [...T, V];

type TuplifyUnion11720<T, L = LastOf11720<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11720<TuplifyUnion11720<Exclude<T, L>>, L>;

type DeepPartial11720<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11720<T[P]> }
  : T;

type Paths11720<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11720<K, Paths11720<T[K], Prev11720[D]>> : never }[keyof T]
  : never;

type Prev11720 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11720<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11720 {
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

type ConfigPaths11720 = Paths11720<NestedConfig11720>;

interface HeavyProps11720 {
  config: DeepPartial11720<NestedConfig11720>;
  path?: ConfigPaths11720;
}

const HeavyComponent11720 = memo(function HeavyComponent11720({ config }: HeavyProps11720) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11720) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11720 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11720: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11720.displayName = 'HeavyComponent11720';
export default HeavyComponent11720;
