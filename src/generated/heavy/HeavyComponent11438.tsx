'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11438<T> = T extends (infer U)[]
  ? DeepReadonlyArray11438<U>
  : T extends object
  ? DeepReadonlyObject11438<T>
  : T;

interface DeepReadonlyArray11438<T> extends ReadonlyArray<DeepReadonly11438<T>> {}

type DeepReadonlyObject11438<T> = {
  readonly [P in keyof T]: DeepReadonly11438<T[P]>;
};

type UnionToIntersection11438<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11438<T> = UnionToIntersection11438<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11438<T extends unknown[], V> = [...T, V];

type TuplifyUnion11438<T, L = LastOf11438<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11438<TuplifyUnion11438<Exclude<T, L>>, L>;

type DeepPartial11438<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11438<T[P]> }
  : T;

type Paths11438<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11438<K, Paths11438<T[K], Prev11438[D]>> : never }[keyof T]
  : never;

type Prev11438 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11438<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11438 {
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

type ConfigPaths11438 = Paths11438<NestedConfig11438>;

interface HeavyProps11438 {
  config: DeepPartial11438<NestedConfig11438>;
  path?: ConfigPaths11438;
}

const HeavyComponent11438 = memo(function HeavyComponent11438({ config }: HeavyProps11438) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11438) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11438 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11438: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11438.displayName = 'HeavyComponent11438';
export default HeavyComponent11438;
