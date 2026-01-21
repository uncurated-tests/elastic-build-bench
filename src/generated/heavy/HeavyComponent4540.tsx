'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4540<T> = T extends (infer U)[]
  ? DeepReadonlyArray4540<U>
  : T extends object
  ? DeepReadonlyObject4540<T>
  : T;

interface DeepReadonlyArray4540<T> extends ReadonlyArray<DeepReadonly4540<T>> {}

type DeepReadonlyObject4540<T> = {
  readonly [P in keyof T]: DeepReadonly4540<T[P]>;
};

type UnionToIntersection4540<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4540<T> = UnionToIntersection4540<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4540<T extends unknown[], V> = [...T, V];

type TuplifyUnion4540<T, L = LastOf4540<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4540<TuplifyUnion4540<Exclude<T, L>>, L>;

type DeepPartial4540<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4540<T[P]> }
  : T;

type Paths4540<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4540<K, Paths4540<T[K], Prev4540[D]>> : never }[keyof T]
  : never;

type Prev4540 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4540<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4540 {
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

type ConfigPaths4540 = Paths4540<NestedConfig4540>;

interface HeavyProps4540 {
  config: DeepPartial4540<NestedConfig4540>;
  path?: ConfigPaths4540;
}

const HeavyComponent4540 = memo(function HeavyComponent4540({ config }: HeavyProps4540) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4540) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4540 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4540: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4540.displayName = 'HeavyComponent4540';
export default HeavyComponent4540;
