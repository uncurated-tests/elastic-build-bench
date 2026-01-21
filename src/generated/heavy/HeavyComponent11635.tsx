'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11635<T> = T extends (infer U)[]
  ? DeepReadonlyArray11635<U>
  : T extends object
  ? DeepReadonlyObject11635<T>
  : T;

interface DeepReadonlyArray11635<T> extends ReadonlyArray<DeepReadonly11635<T>> {}

type DeepReadonlyObject11635<T> = {
  readonly [P in keyof T]: DeepReadonly11635<T[P]>;
};

type UnionToIntersection11635<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11635<T> = UnionToIntersection11635<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11635<T extends unknown[], V> = [...T, V];

type TuplifyUnion11635<T, L = LastOf11635<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11635<TuplifyUnion11635<Exclude<T, L>>, L>;

type DeepPartial11635<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11635<T[P]> }
  : T;

type Paths11635<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11635<K, Paths11635<T[K], Prev11635[D]>> : never }[keyof T]
  : never;

type Prev11635 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11635<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11635 {
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

type ConfigPaths11635 = Paths11635<NestedConfig11635>;

interface HeavyProps11635 {
  config: DeepPartial11635<NestedConfig11635>;
  path?: ConfigPaths11635;
}

const HeavyComponent11635 = memo(function HeavyComponent11635({ config }: HeavyProps11635) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11635) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11635 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11635: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11635.displayName = 'HeavyComponent11635';
export default HeavyComponent11635;
