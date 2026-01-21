'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11658<T> = T extends (infer U)[]
  ? DeepReadonlyArray11658<U>
  : T extends object
  ? DeepReadonlyObject11658<T>
  : T;

interface DeepReadonlyArray11658<T> extends ReadonlyArray<DeepReadonly11658<T>> {}

type DeepReadonlyObject11658<T> = {
  readonly [P in keyof T]: DeepReadonly11658<T[P]>;
};

type UnionToIntersection11658<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11658<T> = UnionToIntersection11658<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11658<T extends unknown[], V> = [...T, V];

type TuplifyUnion11658<T, L = LastOf11658<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11658<TuplifyUnion11658<Exclude<T, L>>, L>;

type DeepPartial11658<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11658<T[P]> }
  : T;

type Paths11658<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11658<K, Paths11658<T[K], Prev11658[D]>> : never }[keyof T]
  : never;

type Prev11658 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11658<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11658 {
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

type ConfigPaths11658 = Paths11658<NestedConfig11658>;

interface HeavyProps11658 {
  config: DeepPartial11658<NestedConfig11658>;
  path?: ConfigPaths11658;
}

const HeavyComponent11658 = memo(function HeavyComponent11658({ config }: HeavyProps11658) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11658) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11658 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11658: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11658.displayName = 'HeavyComponent11658';
export default HeavyComponent11658;
